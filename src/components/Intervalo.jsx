import "./Intervalo.css";
import Card from "./Card";
import { TextField } from "@mui/material";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" Red>
      <div className="Intervalo">
        <span>
          Mínimo:
          <TextField
            id="outlined-basic"
            label="Mínimo"
            variant="outlined"
            type="number"
            value={min}
            size="small"
            className="txtField"
            onChange={(event) => props.alteraMinimo(+event.target.value)}
            sx={{ input: { color: "white", background: "#cf3232" } }}
          />
        </span>
        <span>
          Máximo:
          <TextField
            id="outlined-basic"
            label="Máximo"
            variant="outlined"
            type="number"
            value={max}
            size="small"
            className="txtField"
            sx={{ input: { color: "white", background: "#cf3232" } }}
          />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alteraMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alteraMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
