/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import {Grid, Typography, Divider} from '@material-ui/core'
import MenuItems from "../menuitems";

function MenuContainer() {

  return (
    <div
      className="App"
      css={css`
        height: 100%;
      `}
    >
        <Grid container direction={"column"} spacing={3}>
            <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#003057" }}>
                Perfil estudiante
            </Typography>
            <Divider light />
            </Grid>
            <Grid item>
                <MenuItems/>
            </Grid>            
        </Grid>

      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

          ::selection {
            background: #000;
            color: #f0eff1;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
            --webkit-tap-highlight-color: transparent;
          }
                    
          .container {
            width: 100%;
            margin: auto;
          }
        `}
      />
    </div>
  );
}

export default MenuContainer;