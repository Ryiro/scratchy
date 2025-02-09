import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductsTable from "@/components/admin/products/ProductsTable";
import AddProductForm from "@/components/admin/products/AddProductForm";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Products Management</h2>
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products">Products List</TabsTrigger>
          <TabsTrigger value="add">Add New Product</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ProductsTable />
        </TabsContent>

        <TabsContent value="add">
          <AddProductForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
