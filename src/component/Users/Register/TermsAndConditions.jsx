const TermsAndConditions = ({ onClose }) => {
    return (
      <div className="py-4 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full overflow-auto max-h-screen">
          <h1 className="text-2xl font-bold mb-4">Términos y Condiciones sobre la Información del Usuario</h1>
  
          <h2 className="text-xl font-semibold mt-6">1. Información Personal</h2>
          <p className="mt-2">
            Al registrarte en nuestro sitio web, nos proporcionas información personal, como tu nombre, apellido, correo electrónico,
            dirección y otros datos necesarios para completar el proceso de registro. Nos comprometemos a proteger tu privacidad y utilizar
            esta información únicamente para los fines estipulados en estos términos.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">2. Uso de la Información</h2>
          <p className="mt-2">
            La información que recopilamos es utilizada para:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Gestionar tu cuenta y facilitar el proceso de compra.</li>
            <li>Proporcionarte una experiencia de usuario personalizada en nuestro sitio.</li>
            <li>Mejorar la seguridad de nuestro sitio web y prevenir el fraude.</li>
            <li>Comunicarnos contigo en relación con tu cuenta, pedidos y promociones especiales.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6">3. Protección de Datos</h2>
          <p className="mt-2">
            Tu información personal está protegida conforme a las normativas de privacidad vigentes. Implementamos medidas de seguridad
            para proteger tus datos contra accesos no autorizados, alteración o divulgación. Sin embargo, no podemos garantizar la seguridad
            total de la información transmitida a través de internet.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">4. Almacenamiento y Transferencia de Datos</h2>
          <p className="mt-2">
            Tu información será almacenada en servidores seguros. No compartimos tus datos personales con terceros sin tu consentimiento,
            excepto cuando sea necesario para procesar tus transacciones (como con proveedores de servicios de pago o envíos), o cuando la ley lo exija.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">5. Derechos del Usuario</h2>
          <p className="mt-2">
            Tienes derecho a:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Acceder, rectificar o eliminar tu información personal en cualquier momento.</li>
            <li>Solicitar una copia de los datos que hemos almacenado sobre ti.</li>
            <li>Retirar tu consentimiento para el uso de tus datos, lo que puede afectar la posibilidad de utilizar ciertos servicios en nuestra plataforma.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6">6. Cookies</h2>
          <p className="mt-2">
            Nuestro sitio utiliza cookies para mejorar tu experiencia de navegación y análisis del tráfico en el sitio. Puedes aceptar o rechazar
            el uso de cookies, pero esto puede afectar la funcionalidad del sitio.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">7. Modificación de los Términos</h2>
          <p className="mt-2">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio será notificado en esta página,
            y su continuidad en el uso del sitio web implicará la aceptación de los términos modificados.
          </p>
  
          <h2 className="text-xl font-semibold mt-6">8. Contacto</h2>
          <p className="mt-2">
            Para cualquier consulta o ejercicio de tus derechos sobre la información personal, puedes contactarnos a través del correo
            electrónico <span className="text-blue-600 font-bold">DevAp@empresa.com</span>.
          </p>
  
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-custom-gree-2 text-white font-bold rounded hover:bg-gray-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;
  