import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
function Index() {
  // get the key from firebase for connection
  const firebaseConfig = {
    apiKey: 'AIzaSyBaGvCzYCqxSpNczuhCGmL7oS4NROACDoE',
    authDomain: 'fir-9-dojo-3ec94.firebaseapp.com',
    projectId: 'fir-9-dojo-3ec94',
    storageBucket: 'fir-9-dojo-3ec94.appspot.com',
    messagingSenderId: '501219448194',
    appId: '1:501219448194:web:64e81738309e0eced4ab9b',
  }

  initializeApp(firebaseConfig)

  // int server
  const db = getFirestore()

  // collection ref
  const colRef = collection(db, 'books')

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
      console.log(snapshot.docs)
    })
    .catch((error) => {
      console.log(error)
    })

  return <div>index</div>
}
export default Index
