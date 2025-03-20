// import React, { useState, useEffect, useCallback } from 'react';
// import { 
//   db,
//   auth,
//   collection, 
//   addDoc, 
//   getDocs, 
//   deleteDoc, 
//   doc
// } from '../utilis/FirebaseConfig'; // Fixed typo in path

// function Testimonials() {
//   const [testimonials, setTestimonials] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     position: '',
//     quote: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });

//   // Use useCallback to prevent infinite loop with useEffect
//   const fetchTestimonials = useCallback(async () => {
//     try {
//       const testimonialsCollection = collection(db, 'testimonials');
//       const snapshot = await getDocs(testimonialsCollection);
//       const testimonialsData = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setTestimonials(testimonialsData);
//     } catch (error) {
//       console.error('Error fetching testimonials:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchTestimonials();
    
//     // Check if user is admin
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         // You can add more specific admin checks here if needed
//         setIsAdmin(true);
//       } else {
//         setIsAdmin(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [fetchTestimonials]); // Added dependency

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       await addDoc(collection(db, 'testimonials'), {
//         ...formData,
//         timestamp: new Date(),
//         approved: false // Set to false so you can approve before display
//       });
      
//       setSubmitMessage({ 
//         text: 'Thank you for your testimonial! It will be reviewed before being published.',
//         type: 'success'
//       });
      
//       setFormData({ name: '', position: '', quote: '' });
//       setTimeout(() => {
//         setShowForm(false);
//         setSubmitMessage({ text: '', type: '' });
//       }, 3000);
      
//       fetchTestimonials(); // Refresh the testimonials list
//     } catch (error) {
//       console.error('Error submitting testimonial:', error);
//       setSubmitMessage({ 
//         text: 'There was an error submitting your testimonial. Please try again.',
//         type: 'error'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this testimonial?')) {
//       try {
//         await deleteDoc(doc(db, 'testimonials', id));
//         setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
//       } catch (error) {
//         console.error('Error deleting testimonial:', error);
//       }
//     }
//   };

//   // Styles
//   const sectionStyles = {
//     padding: '100px 5%',
//     backgroundColor: '#f8f9fa',
//   };

//   const containerStyles = {
//     maxWidth: '1200px',
//     margin: '0 auto',
//   };

//   const headingStyles = {
//     fontSize: '36px',
//     marginBottom: '15px',
//     fontWeight: '700',
//     color: '#222',
//   };

//   const subheadingStyles = {
//     fontSize: '18px',
//     color: '#666',
//     marginBottom: '50px',
//   };

//   const testimonialsGridStyles = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
//     gap: '30px',
//   };

//   const testimonialCardStyles = {
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     padding: '30px',
//     boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'relative',
//   };

//   const quoteStyles = {
//     fontSize: '18px',
//     lineHeight: '1.7',
//     color: '#555',
//     marginBottom: '25px',
//     flex: '1',
//   };

//   const clientInfoStyles = {
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const avatarStyles = {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     marginRight: '15px',
//     objectFit: 'cover',
//   };

//   const clientNameStyles = {
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: '5px',
//   };

//   const clientPositionStyles = {
//     fontSize: '14px',
//     color: '#666',
//   };

//   const addButtonStyles = {
//     backgroundColor: '#6C63FF',
//     color: '#fff',
//     border: 'none',
//     padding: '12px 20px',
//     borderRadius: '25px',
//     fontSize: '16px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     marginTop: '20px',
//     transition: 'background-color 0.3s',
//   };

//   const deleteButtonStyles = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: '#ff4d4d',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50%',
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     cursor: 'pointer',
//     fontSize: '16px',
//   };

//   const modalOverlayStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     zIndex: 1000,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const modalContentStyles = {
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '10px',
//     width: '90%',
//     maxWidth: '500px',
//     maxHeight: '80vh',
//     overflow: 'auto',
//     position: 'relative',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '24px',
//     cursor: 'pointer',
//   };

//   const formStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   };

//   const inputStyles = {
//     padding: '12px',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     fontSize: '16px',
//   };

//   const submitButtonStyles = {
//     backgroundColor: '#6C63FF',
//     color: '#fff',
//     border: 'none',
//     padding: '12px',
//     borderRadius: '5px',
//     fontSize: '16px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const messageStyles = (type) => ({
//     padding: '10px',
//     borderRadius: '5px',
//     marginTop: '10px',
//     backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
//     color: type === 'success' ? '#155724' : '#721c24',
//   });
//   // Styles remain the same as in your original code
//   // ...

//   return (
//     <section id="testimonials" style={sectionStyles}>
//       {/* Component JSX remains the same */}
//     </section>
//   );
// }

// export default Testimonials;