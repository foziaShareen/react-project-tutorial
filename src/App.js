import './App.css'
const App = () => {
  const categories = [
    {
      id: 1,
      title: "Men",
    },
    {
      id: 2,
      title: "Women",
    },
    {
      id: 3,
      title: "Children",
    },
  ];

  return (
    <div className="categories-container ">
      {categories.map(({title}) => {
        return (
          <div className="category-conatainer">
            <div className="category-body-conatainer">
              {/* <img/> */}
              <h2>{ title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
      
           
       
     
        

       
        
         
    
    
     
    </div> //end categories
  );
};
export default App;
