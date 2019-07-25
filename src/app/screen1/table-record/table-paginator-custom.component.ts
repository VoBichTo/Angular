import { MatPaginatorIntl } from '@angular/material';

const RangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 of ${length}`; }
  
  length = Math.max(length, 0);
    
  const startIndex = page;
//   pageSizeOptions: [] = [5, 10, le];
  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} of ${Math.ceil(length / pageSize)}`;
}


export function getPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  
  paginatorIntl.itemsPerPageLabel = 'Items per page:';
  paginatorIntl.nextPageLabel = 'Next page';
  paginatorIntl.previousPageLabel =  'Previous Page';
  paginatorIntl.getRangeLabel = RangeLabel;
  
  return paginatorIntl;
}