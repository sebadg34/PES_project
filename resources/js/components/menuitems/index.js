/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";

import Perfil from "../perfil";

function MenuItems (){

    const container = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
        },
      };
    
    const breakpoints = [576, 768, 992, 1200];

    const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

    return (
    <motion.div
        className="MenuItems container"
        variants={container}
        initial="hidden"
        animate="visible"
        css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        ${mq[2]} {
            grid-template-columns: 1fr;
        }
        margin-top: 30px;
        padding: 40px 20px;
        background: #003057;
        border-radius: 50px;

        .menu-items {
            padding: 1rem 1.5rem;
            display: flex;
            border: #efefef 1px solid;
            border-top: none;
            ${mq[0]} {
            display: grid;
            img {
                margin-bottom: 10px;
            }
            }

            &:last-child:before {
                border-bottom: none;
            }

            &:nth-of-type(1) {
            border-left: none;
            ${mq[2]} {
                border-right: none;
            }
            }

            &:nth-of-type(2) {
            border-right: none;
            ${mq[2]} {
                border-left: none;
            }
            }

            &:nth-of-type(3) {
                border-bottom: none;
                border-left: none;
            }

            &:nth-of-type(4) {
                border-bottom: none;
                border-right: none;
            }            

            .item-content {
            color: white;
            display: grid;
            padding: 0 1rem;

            p {
                font-size: 0.8rem;
                ${mq[(0, 1)]} {
                font-size: 0.7rem;
                }
            }

            .item-title-box {
                display: flex;
                justify-content: space-between;

                .item-title,
                .item-price {
                font-size: 1.5rem;
                ${mq[(0, 1)]} {
                    font-size: 0.8rem;
                }
                }
            }
            }
        }

        img {
            height: 85px;
            ${mq[(0, 1)]} {
            height: 75px;
            }
            cursor: pointer;
        }
        `}
    >
        <Perfil />
    </motion.div>
    );
}


export default MenuItems;
