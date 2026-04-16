const UserDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div>
      <h1>User Detail for #{id}</h1>
    </div>
  );
};

export default UserDetail;
