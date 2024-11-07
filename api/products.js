export const addProduct = 'admin/addProduct';
export const viewProduct = '/get/allProductList';
export function editProduct(id) {
   return `admin/updateProd/${id}`;
} 
export function deleteProduct(id) {
   return `admin/deleteProd/${id}`;
} 