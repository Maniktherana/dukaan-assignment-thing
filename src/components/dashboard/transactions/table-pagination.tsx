import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TablePagination = () => {
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="border" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="bg-[#146EB4] hover:bg-[#10558b] hover:text-white text-white"
            size={"icon"}
          >
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">13</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">14</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">15</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">16</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">17</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">18</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="border" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
