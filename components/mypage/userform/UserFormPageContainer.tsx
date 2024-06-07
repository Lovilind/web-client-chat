import UserFormWrapper from './UserFormWrapper';

const UserFormPageContainer = () => {
  return (
    <div className="text-center">
      <h1 className="bold text-3xl">나의 성향을 작성해주세요 !</h1>
      <h2 className="text-md">성향을 작성하면 매칭에 도움이 됩니다.</h2>
      <UserFormWrapper />
    </div>
  );
};

export default UserFormPageContainer;
