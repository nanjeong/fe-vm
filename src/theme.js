import { css } from "styled-components";

const flexLayoutMixin = (
    direction = "row",
    justify = "flex-start",
    align = "stretch"
) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

const theme = { flexLayoutMixin };

export default theme;
