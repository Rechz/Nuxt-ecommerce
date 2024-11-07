import { addProduct, viewProduct, editProduct, deleteProduct } from '~/api/products.js';
import { apiWrapper } from '~/api/apiWrapper';
export function useProduct() {
    const { $axios } = useNuxtApp();
    const items = ref([])
  const addItems = async (payload) => {
    const add = await apiWrapper(() => $axios.post(`${addProduct}`, payload));
      if (add) {
        await viewItems();
        return true;
      }
    }
  const viewItems = async () => {
    items.value = await apiWrapper(() => $axios.get(`${viewProduct}`))
  }
  const editItems = async (payload) => {
    const edit = await apiWrapper(() => $axios.put(`${editProduct(payload)}`));
      if (edit) {
        await viewItems();
      }
  }
  const deleteItems = async (payload) => {
    const del = await apiWrapper(() => $axios.delete(`${deleteProduct(payload)}`));
      if (del) {
        await viewItems();
      }
    }
    return {items, addItems, viewItems, editItems, deleteItems}    
}