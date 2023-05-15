import "./Intervalo.css";
import Card from "./Card";
import { TextField } from "@mui/material";

const Intervalo = (props) => {
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
          value={0}
          size="small"
          className="txtField"
        />
      </span>
      <span>
        Máximo:
        <TextField
          id="outlined-basic"
          label="Máximo"
          variant="outlined"
          type="number"
          value={10}
          size="small"
          className="txtField"
        />
      </span>
      </div>
    </Card>
    
  );
};

export default Intervalo;
