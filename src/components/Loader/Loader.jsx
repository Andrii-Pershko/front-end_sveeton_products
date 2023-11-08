import palitre from '../../img/plitre.png';
import pencil from '../../img/pensil.png';
import { Palitre, Pencil, ThumbLoader } from './Loader.styled';
const Loader = () => {
  return (
    <ThumbLoader>
      <Palitre src={palitre} alt="palitre" />
      <Pencil src={pencil} alt="pencil" />
    </ThumbLoader>
  );
};
export default Loader;
