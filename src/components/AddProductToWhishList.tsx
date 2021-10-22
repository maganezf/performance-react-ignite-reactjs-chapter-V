export interface AddProductToWhishListProps {
  onAddToWhishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWhishList({
  onAddToWhishList,
  onRequestClose,
}: AddProductToWhishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button type='button' onClick={onAddToWhishList}>
        Sim
      </button>
      <button type='button' onClick={onRequestClose}>
        Não
      </button>
    </span>
  );
}
