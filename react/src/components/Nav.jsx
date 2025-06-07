import { useCount } from "../context/UserContext"
const Nav = () => {
    const { count } = useCount();
  return (
    <div>
      Nav {count > 10 ? <span className="text-red-500">Count is high</span> : <span className="text-green-500">Count is low</span>}
    </div>
  )
}

export default Nav