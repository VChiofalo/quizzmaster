


const router = createBrowserRouter([
  {
    path: '/',
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
)
