
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
return (
        <div>
            <FaShoppingCart size={20} />
            <span>(0)</span>
        </div>
    );
};

export default CartWidget;
