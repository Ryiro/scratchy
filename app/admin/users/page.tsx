import UsersTable from "@/components/admin/users/UsersTable";

export default async function UsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Users Management</h2>
      </div>
      <UsersTable />
    </div>
  );
}
