// Chatlist.jsx
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { socketStorage } from '../redux/action';

// Chatroom.jsx
import { useSelector } from 'react-redux';
 

const Chatroom = () => {
    const socket = useSelector(state => state.socketStorage.socket);
    const { pathname } = useLocation();
    const [arrivalChat, setArrivalChat] = useState(null); // 도착한 메세지 저장
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
    	arrivalChat && setChats((prev) => [...prev, arrivalChat]) // 채팅 리스트에 추가
    }, [arrivalChat]);
  
    useEffect(() => {
        socket.on('message-expert', (chatObj) => { // 메세지 수신
            const { result, errmsg } = chatObj;
            setArrivalChat(result);
        });
    }, [socket]) // 괄호 안의 변수에 변화가 생기면 useEffect 내부 함수 실행
  
}


const Chatlist = () => {
	const [chatState, setChatState] = useState();
  	const socket = io.connect(process.env.REACT_APP_SOCKET_URL);
  	