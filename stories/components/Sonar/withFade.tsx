import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import "./sonar.css";

export enum VARIANT {
    PRIMARY,
    SECONDARY
}

interface IProps {
    variant?: VARIANT
}

export const Button = styled.button<IProps>`
  margin: 8px;
  border-radius: ${props => props.theme.borderRadius};
  ${props => {
        switch (props.variant) {
            case VARIANT.SECONDARY:
                return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
            case VARIANT.PRIMARY:
            default:
                return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
        }
    }}
  `;

export const withFadeIn = (Component, isVisible: boolean) => {
    return (props): JSX.Element => {
        const styles = useSpring({
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 24,
            config: { duration: 1000 },
            from: { opacity: 0 },
            to: { opacity: 1 },
            loop: false,
        });

        return (
            <animated.div
                style={{
                    ...styles
                }}>
                <Component {...props} />
            </animated.div>
        )
    }
}

export const printProps = Component => {
    return (props) => {
        console.log(props);

        return <Component {...props} />
    }
}

export const ButtonWithFadeIn = withFadeIn(Button, false);