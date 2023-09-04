import Input from '../ui/Input';
import SecondaryButton from '../ui/SecondaryButton';

const CartCupom = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 lg:flex-row w-full justify-between py-4 border px-4">
        <div className="flex gap-2">
          <Input
            className="w-full lg:w-fit"
            type="text"
            placeHolder="Código do cupom"
          />
          <SecondaryButton className="w-full lg:w-fit">
            Aplicar cupom
          </SecondaryButton>
        </div>
        <SecondaryButton className="w-full lg:w-fit" disabled={true}>
          Atualizar Carrinho
        </SecondaryButton>
      </div>
    </>
  );
};

export default CartCupom;
