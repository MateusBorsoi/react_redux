import { connect } from "react-redux";
import Card from "./Card";

const Sorteio = (props) => {
  const { min, max } = props;
  const sort = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title="Sorteio de um número" Purple>
      <div>
        <span>
          Resultado <strong>{sort}</strong>
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

export default connect(mapStateToProps)(Sorteio);
