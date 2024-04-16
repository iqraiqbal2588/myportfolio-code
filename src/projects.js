import React from 'react';

function Project() {
  
      
      

  const projectStyle = {
    padding: '10px', // Add padding to the div
  };

  const titleStyle = {
    color: 'blue', // Set title text color to blue
  };

  const descriptionStyle = {
    color: 'grey', // Set description text color to grey
  };

  const bulletListStyle = {
    listStyleType: 'square', // Change bullet points style
  };

  return (
    
    <div style={projectStyle}>
 <div style={{ position: 'relative' }}>
        <img
          src={process.env.PUBLIC_URL + '/images/projects.jpg'}
          alt="Iqra"
          style={{
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            marginBottom: '20px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '2px solid #fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '29px',
            fontWeight: 'w600',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Mobile App Projects
        </div>
      </div>
      <div>
        <h2 style={titleStyle}>QuizMaster - Quiz Game App</h2>
        <p style={descriptionStyle}>
          Engaging quiz game app that challenges users with questions on various topics, with a focus on tenses. Users can test their knowledge and improve their grasp of grammatical tenses through interactive gameplay.
        </p>
        <ul style={bulletListStyle}>
          <li>Focus on questions from various topics, with an emphasis on tenses</li>
          <li>Test knowledge and improve grammatical tense skills</li>
          <li>Interactive gameplay for an engaging experience</li>
        </ul>
      </div>

      <div>
      <h2
       style={titleStyle}>FuelUp - Mobile Octane (Fueling App)</h2>
        <p style={descriptionStyle}>
        Description: Description: FuelUp is a mobile app designed to make refueling your vehicle hassle-free. It provides real-time fuel prices, locates nearby gas stations, and offers a seamless payment experience, ensuring users have a convenient and efficient way to manage their refueling needs.
        </p>
      <ul style={bulletListStyle}>
        <li>Mobile app for hassle-free vehicle refueling</li>
        <li>Real-time fuel prices and nearby gas station locator</li>
        <li>Seamless payment experience for efficient refueling management</li>
      </ul>
    </div>
    <div>
      <h2
       style={titleStyle}> Motimate App </h2>
        <p style={descriptionStyle}>
        Description:  HealthHub is an AI-powered chat app designed to motivate users to lead a healthy lifestyle. It provides personalized health tips, tracks calorie intake, and offers fitness advice to help users achieve their wellness goals.
        </p>
      <ul style={bulletListStyle}>
      <li>AI-powered chat app for a healthy lifestyle</li>
        <li>Personalized health tips and fitness advice</li>
        <li>Tracks calorie intake to help users achieve wellness goals</li>
      </ul>
    </div>
    <div>
      <h2
       style={titleStyle}>payback </h2>
        <p style={descriptionStyle}>
        Description:  payback is a user-friendly payback app designed to simplify and streamline your financial transactions, offering an experience akin to the convenience of EasyKhata. This app empowers users to effortlessly manage and track their everyday expenses, ensuring a seamless and rewarding financial management journey.</p>
      <ul style={bulletListStyle}>
      <li>Seamlessly track daily transactions for a clear overview of spending.</li>
        <li>Categorize expenses and set limits for effective budget management.</li>
        <li>
        Stay informed with timely alerts on transactions, rewards, and due dates.
        </li>
        <li>Prioritize security with encrypted transactions and optional additional measures.</li>
        <li>
        Intuitive and easy-to-navigate interface for a seamless financial management experience.
        </li>
      </ul>
    </div>
    <div>
      <h2
       style={titleStyle}>Bookstore App </h2>
        <p style={descriptionStyle}>
        Description:  BookStore is a comprehensive bookstore app that allows users to browse, search, and purchase a wide range of books. The app includes features like user reviews, book recommendations, and a secure checkout system for a delightful book shopping experience.

        </p>
      <ul style={bulletListStyle}>
      <li>Comprehensive bookstore app for browsing and purchasing books</li>
        <li>Intractive and beautiful Ui that attract user </li>
        <li>User reviews, book recommendations, and secure checkout system</li>
        <li>Provides a delightful book shopping experience</li>
      </ul>
    </div>
    <div>
      <h2
       style={titleStyle}>On Demand Delivery App </h2>
        <p style={descriptionStyle}>
        Description:  Deliver stands out as a trusted partner in the delivery landscape, combining technological innovation with a dedication to customer satisfaction. Whether you're a business looking for efficient logistics solutions or an individual in need of a reliable delivery service, CanaDeliver is your go-to app for hassle-free, nationwide deliveries in Canada.


        </p>
      <ul style={bulletListStyle}>
      <li>Comprehensive coverage across Canada for efficient delivery services.</li>
        <li>Utilizes a sophisticated truck system for optimal transportation of goods.</li>
        <li>Tailored delivery options for businesses and individuals, handling diverse shipments.</li>
        <li>Ensures the safety and security of goods with vetted drivers and careful handling.</li>
        <li>Easy-to-use app interface for seamless order placement, tracking, and management.</li>
      </ul>
    </div>
    <div>
      <h2
       style={titleStyle}>Where To Eat </h2>
        <p style={descriptionStyle}>
        Description:  Deliver stands out as a trusted partner in the delivery landscape, combining technological innovation with a dedication to customer satisfaction. Whether you're a business looking for efficient logistics solutions or an individual in need of a reliable delivery service, CanaDeliver is your go-to app for hassle-free, nationwide deliveries in Canada.


        </p>
      <ul style={bulletListStyle}>
      <li>Comprehensive coverage across Canada for efficient delivery services.</li>
        <li>Utilizes a sophisticated truck system for optimal transportation of goods.</li>
        <li>Tailored delivery options for businesses and individuals, handling diverse shipments.</li>
        <li>Ensures the safety and security of goods with vetted drivers and careful handling.</li>
        <li>Easy-to-use app interface for seamless order placement, tracking, and management.</li>
      </ul>
    </div>
   
    </div>
  );
}

export default Project;
