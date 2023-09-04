import { PaginationInterface } from '@/types';

const PaginationCalc = ({
  pagination,
}: {
  pagination: PaginationInterface;
}) => {
  const startProduct = (pagination.page - 1) * pagination.perPage + 1;
  const endProduct =
    pagination.page === pagination.lastPage
      ? pagination.total
      : pagination.page * pagination.perPage;

  const range = `${startProduct}-${endProduct}`;

  return (
    <div>
      <p className=" font-normal">
        Exibindo {range} de {pagination?.total} resultados
      </p>
    </div>
  );
};

export default PaginationCalc;
