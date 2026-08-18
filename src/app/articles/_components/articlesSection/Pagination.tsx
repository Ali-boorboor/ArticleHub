import * as pagination from "@/components/ui/pagination";

const Pagination = () => {
  return (
    <pagination.Pagination className="col-span-full mt-4">
      <pagination.PaginationContent>
        <pagination.PaginationItem>
          <pagination.PaginationPrevious href="/articles" />
        </pagination.PaginationItem>
        <pagination.PaginationItem>
          <pagination.PaginationLink href="/articles" isActive>
            1
          </pagination.PaginationLink>
        </pagination.PaginationItem>
        <pagination.PaginationItem>
          <pagination.PaginationLink href="/articles">
            2
          </pagination.PaginationLink>
        </pagination.PaginationItem>
        <pagination.PaginationItem>
          <pagination.PaginationLink href="/articles">
            3
          </pagination.PaginationLink>
        </pagination.PaginationItem>
        <pagination.PaginationItem>
          <pagination.PaginationNext href="/articles" />
        </pagination.PaginationItem>
      </pagination.PaginationContent>
    </pagination.Pagination>
  );
};

export default Pagination;
