import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useState, useEffect, useRef } from 'react'

function Index() {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)

  const firebaseConfig = {
    apiKey: 'AIzaSyBaGvCzYCqxSpNczuhCGmL7oS4NROACDoE',
    authDomain: 'fir-9-dojo-3ec94.firebaseapp.com',
    projectId: 'fir-9-dojo-3ec94',
    storageBucket: 'fir-9-dojo-3ec94.appspot.com',
    messagingSenderId: '501219448194',
    appId: '1:501219448194:web:64e81738309e0eced4ab9b',
  }

  initializeApp(firebaseConfig)

  const db = getFirestore()
  const colRef = useRef(collection(db, 'books')) // Use useRef for colRef

  useEffect(() => {
    getDocs(colRef.current) // Access current value of colRef
      .then((snapshot) => {
        let booksArray = []
        snapshot.forEach((doc) => {
          booksArray.push({ ...doc.data(), id: doc.id })
        })
        setBooks(booksArray)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, []) // No need to include colRef in the dependency array

  console.log(books)

  return (
    <div>
      <h1>Books Name:</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Index
