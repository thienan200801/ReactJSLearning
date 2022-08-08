// import './App.css';
// import { gql, useQuery,useMutation, useLazyQuery } from '@apollo/client';
// import { useCallback, useEffect, useState } from 'react';
// import { Formik } from 'formik';
// import { BrowserRouter, Routes, Route, Outlet, useParams, } from "react-router-dom";
// import Test from './test';
// import Footer from './footer';

// export default function App(){
//   return (
//     <Footer/>
//   )
// }

// export default function Modal(){
//   return (
//     <Test />
//   )
// }

// const GET_LIST_CART_ITEMS = gql`
//     query GetListCartItems($customerId: ID!) {
//         customer(customerId: $customerId) {
//           items {
//             productId
//             quantity
//           }
//         }
//     }
// `

// export default function ListCartItems(){
//     const [quantity, setQuantity] = useState(0);

//     const handleAdd = useCallback(()=>{
//         setQuantity(quantity+1);
//     }, [])

//     // function handleAdd(){
//     //     setQuantity(quantity+1);
//     // }
    
//     const {data} = useQuery(GET_LIST_CART_ITEMS, {
//         variables: {
//             customerId: "an"
//         },
//     })
//     console.log(data)

//     return (<div>
//         {data?.customer?.items.map((item, index)=>{
//             setQuantity(item.quantity);

//             return <ul>
//                 <h1>Result</h1>
//                 <li key={index}>{item.productId}</li>
//                 <li key={index+Math.random()}>{item.quantity}</li>
//                 <button onClick={()=>handleAdd()}>+</button>
//             </ul>
//         })}
//     </div>)
// }

// const ADD_TO_CART = gql`
//   mutation AddItems($item: AddToCartInput!) {
//     addItem(input: $item) {
//       totalItems
//     }
//   }
// `
// const GET_CART = gql`
//   query {
//     cart(id: 1){
//       items{
//         id
//         unitTotal{
//           amount
//         }
//         quantity
//       }
//     }
//   }
// `

// function App() {
//   const [mutate, result] = useMutation(ADD_TO_CART)
//   const [getCartQuery, resultQuery] = useLazyQuery(GET_CART)
//   const [itemId, setItemId] = useState("")
//   const [price, setPrice] = useState(0)
//   const [quantity, setQuantity] = useState(0)

//   useEffect(() => {
//     getCartQuery()
//   }, [getCartQuery])

//   console.log(resultQuery)
  
//   const HandleClick = useCallback(() => {
//     mutate({
//       variables: {
//         item: {
//           cartId: 1,
//           id: (itemId),
//           price: parseInt(price),
//           quantity: parseInt(quantity)
//         }
//       }
//     }).then(() => {
//       resultQuery.refetch()
//     })
//   }, [itemId, mutate, price, quantity, getCartQuery]) 

//   return <div id="container">
//     <div id="item-list">
//       {
//         resultQuery.data?.cart.items.map((item, index)=>(
//           <div key={index}>{item.id}: ${item.unitTotal.amount} x {item.quantity}</div>
//         ))
//       }
//     </div>

//     <div id="add-item">
//       <div>ID of item: <input onChange={(e) => {setItemId(e.target.value)}}/> </div>
//       <div>Price: <input onChange={(e) => {setPrice(e.target.value)}}/> </div>
//       <div>Quantity: <input onChange={(e) => {setQuantity(e.target.value)}}/> </div>
//       <button onClick={HandleClick}>Add</button>
//     </div>

//   </div>
// }

// // function Home(){
// //   return <>
// //     p1
// //     <Outlet />
// //   </>
// // }

// // function SubPage(){
// //   return "subPage"
// // }

// // function Contact(){
// //   return "p2"
// // }

// // function About(){
// //   return "p3"
// // }

// // function VarPage(){
// //   const paramValue = useParams()
// //   const pageName = paramValue.pageName
// //   const pageId = paramValue.pageId

// //   return <div>
// //     <h1>{pageName}</h1>
// //     <p>{pageId}</p>
// //   </div>
// // }

// // function SearchParam(){
// //   let [searchParams, setSearchParams] = useSearchParams();

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //     let params = serializeFormQuery(event.target);
// //     setSearchParams(params);
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>{/* ... */}</form>
// //     </div>
// //   );
// // }

// // function App(){
// //   return(
// //   <BrowserRouter>
// //     <Routes>
// //       <Route path="/" element={<Home />} >
// //         <Route path="/subPage" element={<SubPage/>}></Route>
// //       </Route>
// //       <Route path="/baoan" element={<Contact />} />
// //       <Route path="/andie" element={<About />}/>

// //       <Route path=":pageName/:pageId" element={<VarPage/>} />

// //     </Routes>
// //   </BrowserRouter>
// //   )
// // }



// import React from 'react';
// import { useFormik } from 'formik';

//     const validate = values => {
//         const errors = {};
//         if (!values.firstName) {
//             errors.firstName = 'Required';
//         } else if (values.firstName.length > 15) {
//             errors.firstName = 'Must be 15 characters or less';
//         }
        
//         if (!values.lastName) {
//             errors.lastName = 'Required';
//         } else if (values.lastName.length > 20) {
//             errors.lastName = 'Must be 20 characters or less';
//         }
        
//         if (!values.email) {
//         errors.email = 'Required';
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//         }
        
//         return errors;
//     };

//     const SignupForm = () => {
//         const formik = useFormik({
//             initialValues: {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//             },
//             validate,
//             onSubmit: values => {
//                 // alert(JSON.stringify(values, null, 2));
//                 console.log(values, typeof values)
//             },
//         });
//         return (
//         <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="firstName">First Name</label>
//         <input
//             id="firstName"
//             name="firstName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.firstName}
//             />
//         {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//         <br />
        
//         <label htmlFor="lastName">Last Name</label>
//         <input
//             id="lastName"
//             name="lastName"
//             type="text"
//             onChange={formik.handleChange}
//             value={formik.values.lastName}
//             />
//         {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//         <br />

//         <label htmlFor="email">Email Address</label>
//         <input
//             id="email"
//             name="email"
//             type="email"
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             />
//         {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//         <br />
//         <button type="submit">Submit</button>
//         </form>
//     );
//     };

// export default SignupForm;
// import { gql, useMutation } from '@apollo/client';

// // Define mutation
// const INCREMENT_COUNTER = gql`
//   # Increments a back-end counter and gets its resulting value
//   mutation IncrementCounter {
//     currentValue
//   }
// `;

// function MyComponent() {
//   // Pass mutation to useMutation
//   const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
// }
// export default SignupForm;

// import React from 'react';
//  import { Field, Form, Formik, FormikProps } from 'formik';
 
//  const MyInput = ({ field, form, ...props }) => {
//    return <input {...field} {...props} />;
//  };
 
//  const Example = () => (
//    <div>
//      <h1>My Form</h1>
//      <Formik
//        initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
//        onSubmit={(values, actions) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            actions.setSubmitting(false);
//          }, 1000);
//        }}
//      >
//        {(props) => (
//          <Form>
//            <Field type="email" name="email" placeholder="Email" />
//            <Field as="select" name="color">
//              <option value="red">Red</option>
//              <option value="green">Green</option>
//              <option value="blue">Blue</option>
//            </Field>
 
//            <Field name="lastName">
//              {({
//                field, // { name, value, onChange, onBlur }
//                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//                meta,
//              }) => (
//                <div>
//                  <input type="text" placeholder="Email" {...field} />
//                  {meta.touched && meta.error && (
//                    <div className="error">{meta.error}</div>
//                  )}
//                </div>
//              )}
//            </Field>
//            <Field name="lastName" placeholder="Doe" component={MyInput} />
//            <button type="submit">Submit</button>
//          </Form>
//        )}
//      </Formik>
//    </div>
//  );

// import React, { useState, useCallback } from 'react'

// const storeSet = new Set(); 

// function Counter() {
// 	const [count, setCount] = useState(0);
// 	const [countOther, setCountOther] = useState(0);
	
// 	const increase = () => setCount(count + 1);
// 	const decrease = () => setCount(count - 1);
	
// 	const increaseOther = () => setCountOther(countOther + 1);
// 	const decreaseOther = () => setCountOther(countOther + 1);
	
// 	storeSet.add(increase);
// 	storeSet.add(decrease);
// 	storeSet.add(increaseOther);
// 	storeSet.add(decreaseOther);
	
// 	console.log(storeSet);
	
// 	return (
// 			<>
// 				<div>Count: {count}</div>
// 				<button onClick={increase} ref="a">+</button>
				
// 				<button onClick={increase}>-</button>

// 				<div>Count other: {countOther}</div>
// 				<button onClick={increaseOther}>+</button>
// 				<button onClick={decreaseOther}>-</button>
// 			</>
// 	)
// }

// export default Counter;
import { useCallback, useState } from 'react';
import './App.css';


export default function App(){
	const [result, setResult] = useState(0);
	const [para, setPara] = useState('1+1');
	
	const handleCalculate = useCallback(
		(str)=>{
			let a = '', sign = '', b = '';
			for(let i=0; i<str.length; i++){
				if(str[i] !== '+' && str[i] !== '-'  && str[i] !== '*'  && str[i] !== '/'){
					a += str[i];
				}
				else {
					b = str.slice(i+1);
					sign += str[i];
					break;
				}
			}
			if(sign === '+') setResult(parseInt(a) + parseInt(b));
			if(sign === '-') setResult(parseInt(a) - parseInt(b));
			if(sign === '*') setResult(parseInt(a) * parseInt(b));
			if(sign === '/') setResult(parseInt(a) / parseInt(b));
		}	
	, []) 

	return (
		<div className="App">
			<label htmlFor="">
				<input type="text" 
					onChange={(e)=>setPara(e.target.value)}
					value={para}
				/>
				<button className='submit-btn'
					onClick={()=>{handleCalculate(para)}}
				>
					Calculate
				</button>
				<div>{result}</div>
			</label>
		</div>
	)
}