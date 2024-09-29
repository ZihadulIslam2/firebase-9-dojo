// import { initializeApp } from 'firebase/app'
// import { collection, getDocs, getFirestore } from 'firebase/firestore'

// const Index = () => {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyBaGvCzYCqxSpNczuhCGmL7oS4NROACDoE',
//     authDomain: 'fir-9-dojo-3ec94.firebaseapp.com',
//     projectId: 'fir-9-dojo-3ec94',
//     storageBucket: 'fir-9-dojo-3ec94.appspot.com',
//     messagingSenderId: '501219448194',
//     appId: '1:501219448194:web:64e81738309e0eced4ab9b',
//   }
//   initializeApp(firebaseConfig)

//   // init server
//   const db = getFirestore()

//   // collection ref
//   const ColRef = collection(db, 'books') // Ensure the collection name matches

//   // get collection data
//   getDocs(ColRef)
//     .then((snapshot) => {
//       if (snapshot.empty) {
//         console.log('No matching documents.')
//         return
//       }
//       snapshot.docs.forEach((doc) => {
//         console.log(doc.id, '=>', doc.data())
//       })
//     })
//     .catch((error) => {
//       console.error('Error getting documents: ', error)
      
//     })


//   return <div>index</div>
// }
// export default Index


// // import { initializeApp } from 'firebase/app'
// // import { collection, getDocs, getFirestore } from 'firebase/firestore'

// // const Index = () => {
// //   const firebaseConfig = {
// //     apiKey: 'AIzaSyBaGvCzYCqxSpNczuhCGmL7oS4NROACDoE',
// //     authDomain: 'fir-9-dojo-3ec94.firebaseapp.com',
// //     projectId: 'fir-9-dojo-3ec94',
// //     storageBucket: 'fir-9-dojo-3ec94.appspot.com',
// //     messagingSenderId: '501219448194',
// //     appId: '1:501219448194:web:64e81738309e0eced4ab9b',
// //   }
// //   initializeApp(firebaseConfig)

// //   // init server
// //   const db = getFirestore()

// //   // collection ref
// //   const ColRef = collection(db, 'book')

// //   // get collection data
// //   getDocs(ColRef)
// //     .then((snapshot) => {
// //       if (snapshot.empty) {
// //         console.log('No matching documents.')
// //         return
// //       }
// //       snapshot.docs.forEach((doc) => {
// //         console.log(doc.id, '=>', doc.data())
// //       })
// //     })
// //     .catch((error) => {
// //       console.error('Error getting documents: ', error)
// //     })

// //   console.log('firebase')

// //   return <div>index</div>
// // }
// // export default Index

