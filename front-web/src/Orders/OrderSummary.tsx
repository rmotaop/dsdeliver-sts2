import { formatPrice } from "./helpers";


type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary({amount, totalPrice, onSubmit}: Props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        Pedidos selecionados: <span>  </span>
                        <strong className="amount-selected">
                             {amount}
                        </strong>
                        
                    </span>
                    <span className="amount-selected-container">
                        Valor Total: <span>   </span>
                        <strong className="amount-selected">
                             {formatPrice(totalPrice)}
                        </strong>
                        
                    </span>
                </div>
                <button 
                    className="order-summary-make-order"
                    onClick={onSubmit}
                    >
                    Fazer Pedido: 
                </button>
            </div>
        </div>
    )

}

export default OrderSummary;