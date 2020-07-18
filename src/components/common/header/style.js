import styled from 'styled-components';
import logo from '../../../static/logo.png';

const headerHeight = '56px';
const headerColor = '#1761A0';
export const HeaderWrapper = styled.div`
    position: relative;
    height: ${headerHeight};
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 124px;
    display: block;
    height: ${headerHeight};
    background: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 50px;
`

export const Nav = styled.div.attrs({

})`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div.attrs({

})`
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: ${headerColor};
    }
    line-height: ${headerHeight};
    justify-content: space-between;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
`

export const SearchWrapper = styled.div.attrs({

})`
    height: 100%;
    float: left;
    position: relative;
    .searchicon {
        position: absolute;
        right: 10px;
        bottom: 19px;
        color: #999;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 200px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused {
        width: 300px;
    }
    &.expand-enter {
        transition: all .2s ease-out
    }
    &.expand-enter-active {
        width: 300px;
    }
    &.expand-exit {
        transition: all .2s ease-out
    }
    &.expand-exit-active {
        width: 200px;
    }
`

export const SearchInfo = styled.div.attrs({

})`
    position: absolute;
    top: ${headerHeight};
    left: 25px;
    width: 250px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoUpdate = styled.span.attrs({

})`
    float: right;
    font-size: 13px;
`

export const SearchInfoList = styled.div.attrs({

})`
    overflow: hidden;
`

export const SearchInfoItem = styled.a.attrs({

})`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const SearchInfoTitle = styled.div.attrs({

})`
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const Misc = styled.div.attrs({

})`
    position: absolute;
    right: 0;
    top: 0;
    height: ${headerHeight};
`

export const Button = styled.div.attrs({

})`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid ${headerColor};
    margin-right: 20px;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: ${headerColor};
    }
    &.blog{
    background: ${headerColor};
    color: white;
    }
`