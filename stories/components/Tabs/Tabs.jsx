import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import './tabs.css';

export const Tabs = ({ label }) => {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          {label}
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
}

Tabs.PropTypes = {
  label: PropTypes.string.isRequired,
};

Tabs.defaultProps = {
  label: "Active",
};
