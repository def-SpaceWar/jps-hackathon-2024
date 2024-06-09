import { getCtx, loadImage } from "./render";
import { getKey } from "./input";
import { AnimatedSprite } from "./render";
import playerUrl from "../assets/png/sprites/player.png";
import greenMonsterUrl from "../assets/png/sprites/green_monster.png";
import { playerAnimations, greenMonsterAnimations } from "../assets/png/sprites/animations";

const COLLISION_LEEWAY = 4;

export async function getPlayer() {
    const ctx = getCtx();
    return {
        pos: { x: 0, y: 180 },
        vel: { x: 0, y: 0 },
        gravity: 1500,
        speed: 5000,
        //speed: 750,
        jumpPower: 300,
        direction: "none",

        animatedSprite: new AnimatedSprite(
            await loadImage(playerUrl),
            playerAnimations,
            4,
            4,
        ),

        update(dt) {
            this.vel.y += this.gravity * dt;
            this.vel.x *= Math.exp(-dt * Math.log(this.isGrounded ? 20 : 8000));
            this.vel.y *= Math.exp(-dt * Math.log(1.5));
            this.pos.x += this.vel.x * dt;
            this.pos.y += this.vel.y * dt;

            if (getKey("a")) {
                this.vel.x -= this.speed * dt;
            }

            if (getKey("d")) {
                this.vel.x += this.speed * dt;
            }


            if (getKey("w") && this.isGrounded) {
                this.vel.y -= this.jumpPower;
            }

            if (this.vel.x < 0) {
                this.direction = "left";
            }

            if (this.vel.x > 0) {
                this.direction = "right";
            }

            if (Math.abs(this.vel.x) < 15) {
                this.direction = "none";
                this.animatedSprite.setAnimation("idle");
            }
        },

        render(dt) {
            ctx.save();
            // ctx.fillStyle = "red";
            // ctx.fillRect(this.pos.x - 20, this.pos.y - 40, 34, 88);
            ctx.translate(this.pos.x, this.pos.y);
            if (this.direction == "left") {
                ctx.scale(-1, 1);
                ctx.translate(6, 0);
            }
            if (this.direction != "none") this.animatedSprite.enforceAnimation("move");
            this.animatedSprite.render(dt);
            ctx.restore();
        },

        isColliding(collideable) {
            // [-20, -40, 14, 48]
            return !(
                collideable.x > this.pos.x + 14 ||
                collideable.x + collideable.w < this.pos.x - 20 ||
                collideable.y > this.pos.y + 48 ||
                collideable.y + collideable.h < this.pos.y - 40
            );
        },

        unCollide(collideables) {
            this.isGrounded = false;

            // [-20, -40, 14, 48]
            for (const collideable of collideables) {
                if (!this.isColliding(collideable)) continue;

                if (Math.abs(collideable.y - 48 - this.pos.y) < COLLISION_LEEWAY * 2) {
                    this.pos.y = collideable.y - 48;
                    this.vel.y = Math.min(0, this.vel.y);
                    this.isGrounded = true;
                    continue;
                } else if (Math.abs(collideable.y + collideable.h + 40 - this.pos.y) < COLLISION_LEEWAY * 2) {
                    this.pos.y = collideable.y + collideable.h + 40;
                    this.vel.y = Math.max(0, this.vel.y);
                    continue;
                }

                if (Math.abs(collideable.x - 14 - this.pos.x) < COLLISION_LEEWAY) {
                    this.pos.x = collideable.x - 14;
                    this.vel.x *= -1;
                    //this.vel.x = Math.min(0, this.vel.x);
                    continue;
                } else if (Math.abs(collideable.x + collideable.w + 20 - this.pos.x) < COLLISION_LEEWAY) {
                    this.pos.x = collideable.x + collideable.w + 20;
                    this.vel.x *= -1;
                    //this.vel.x = Math.max(0, this.vel.x);
                    continue;
                }
            }
        },

        goThroughDoor(doors, exit, currentData) {
            for (const door of doors) {
                if (!this.isColliding(door)) continue;
                door.animatedSprite.enforceAnimation("open");
                this.vel.x = 0;
                if (door.animatedSprite.currentAnimationTime > 2) {
                    this.pos = door.newPlayerPos;
                    exit([currentData, door.scene]);
                }
            }
        }
    }
};
