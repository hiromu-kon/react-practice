import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"
import { DefaultLayout } from "../templates/DefaultLayout"

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `Hiro${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  }
}))

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  return (
    <DefaultLayout>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} isAdmin={isAdmin} />
          ))}
        </SUserArea>
      </SContainer>
    </DefaultLayout>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
