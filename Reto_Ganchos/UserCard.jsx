const UserCard = ({ name, company }) => {
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <p>{company}</p>
      </div>
    );
  };
  
  export default UserCard;  