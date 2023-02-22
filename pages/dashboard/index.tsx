import { useRouter } from "next/router";
import Link from "next/link";

// export default function Dashboard() {
//     const router = useRouter();
// 	return (
// 		<>
// 			Has llegao al dashboard
// 			<button onClick={() => router.push('/login')}>Salir</button>
// 		</>
// 	);
// }

import withPrivateRoute from '../../components/withPrivateRoute';

const Dashboard = () => {
  	return (
		<>
			Has llegao al dashboard!!
			{/* <button onClick={() => router.push('/login')}>Salir</button> */}
		</>
	);
};

Dashboard.getInitialProps = async (props: any) => {
  console.info('##### Congratulations! You are authorized! ######', props);
  return {};
};

export default withPrivateRoute(Dashboard);
