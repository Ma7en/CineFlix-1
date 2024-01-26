/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledBox = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
`;

function Box({ children }) {
    return (
        <>
            <StyledBox>{children}</StyledBox>
        </>
    );
}

export default Box;
