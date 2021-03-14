import styled from 'styled-components'

interface IFavoriteButton {
  favorite: boolean
}

export const ShortInfo = styled.div`
  flex-grow: 1;
  display: none;
  color: white;
  font-size: 20px;
  p {
    line-height: 20px;
    margin-bottom: 0;
  }
`

export const FavoriteButton = styled.div<IFavoriteButton>`
  display: none;
  color: white;
  font-size: 20px;
  padding-left: 7px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.favorite ? '#5197e9' : 'transparent')};

  transform: rotate(${(props) => (props.favorite ? 45 : 0)}deg);

  &:before {
    content: '+';
  }
  &:hover {
    background-color: var(--blue);
  }
  &:active,
  &:focus {
    transform: rotate(${(props) => (props.favorite ? 0 : 45)}deg);
  }
`

export const Image = styled.img`
  width: 100%;
`

export const ImageContent = styled.div`
  width: 100%;
  position: relative;
  &:hover ${ShortInfo} {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    padding: 0.8rem;
  }

  &:hover ${FavoriteButton} {
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 1;
    border-radius: 100px;
    border: 1px solid #fff;
    cursor: pointer;
  }

  &:hover ${Image} {
    opacity: 0.5;
    background: black;
  }
`
