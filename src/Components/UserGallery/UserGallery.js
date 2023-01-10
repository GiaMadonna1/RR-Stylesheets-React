import UserCard from "../UserCard/UserCard"

const galleryStyle= {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%'
}

function UserGallery() {
    return (
       <div>
          <UserCard />
          <UserCard />
          <UserCard />
       </div>
    )
}

export default UserGallery