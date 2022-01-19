import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sonar.css";
import { defaultTheme } from "./theme";
import { ThemeProvider } from 'styled-components';
import { Button, ButtonWithFadeIn, VARIANT } from "./withFade";


export const Sonar = ({ label }) => {

  const [theme, setTheme] = React.useState(defaultTheme);

  const newTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      common: {
        ...theme.palette.common,
        black: '#000000'
      }
    }
  };

  const secondaryTheme = {
    ...theme,
    palette: {
      ...theme.palette,
      common: {
        ...theme.palette.common,
        black: '#fff'
      }
    }
  }

  const updateTheme = () => {
    setTheme(secondaryTheme);
  }


  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          variant={VARIANT.PRIMARY}
        >
          PRIMARY BUTTON
        </Button>

        <Button
          variant={VARIANT.SECONDARY}
          onClick={updateTheme}
        >
          SECONDARY BUTTON
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <ButtonWithFadeIn
          variant={VARIANT.PRIMARY}>
          PRIMARY BUTTON
        </ButtonWithFadeIn>

        <ButtonWithFadeIn
          variant={VARIANT.SECONDARY}>
          SECONDARY BUTTON
        </ButtonWithFadeIn>
      </div>

    </ThemeProvider>
  );
};

Sonar.propTypes = {
  label: PropTypes.string.isRequired,
};

Sonar.defaultProps = {
  label: "Active",
};
