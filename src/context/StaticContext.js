import React from "react";

const Context = React.createContext({
    // valor por defecto si no tiene acceso
  name: 'esto-sin-provider',
  suscribete: true
});

export default Context;
