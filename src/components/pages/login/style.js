import styled from "styled-components";

export const LoginWrapper = styled.div.attrs({

})`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
`

export const LoginBox = styled.div.attrs({

})`
    margin: 20vh auto;
    height: 500px;
    width: 400px;
    padding: 50px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1); 
    background: #fff;
    border-radius: 5px;
`

export const InputWrapper = styled.div.attrs({

})`
    margin-top: 5vh; 
    border: 1px solid rgb(200 200 200);
    border-radius: 4px;
    background: hsl(0deg 0% 71% / 10%);
    position: relative;
    .input {
        position: absolute;
        float: left;
        right: 10px;
        left: 50px;
    }
    input {
        width: 100%;
        height: 42px;
        outline: none;
        border: none;
        background: transparent;
        font-size: 1em;
        color: #666;
        &::placeholder {
            color: #afafaf;
        }
    }
    .icon {
        float: left;
        left: 0;
        top: 3px;
        line-height: 100%;
        padding: 13px;
    }
    .email {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgb(200 200 200);
    }
    .password{
        height: 50px;
        line-height: 50px;
    }
`

export const LoginButton = styled.button.attrs({

})`
    margin-top: 5vh;
    height: 50px;
    width: 100%;
    background: #3194d0;
    color: white;
    font-size: 1.5em;
    border-radius: 50px;
    border: none;
    cursor: pointer;
`

export const Solution = styled.div.attrs({

})`
    color: #afafaf;
    height: 50px;
    line-height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialMediaLogin = styled.div.attrs({

})`
    height: 100%;
    margin-top: 3vh;
    width: 100%;
    padding-top: 3vh;
    border-top: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`