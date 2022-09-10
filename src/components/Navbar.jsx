import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
        <div class="container">
            <a href="#" class="navbar-brand mb-0 h1"><img 
                class="d-inline-block align-top"
                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" width="30" height="30"/>
                Gotta Go
            </a>
            <button 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            class="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div 
                class="collapse navbar-collapse" 
                id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="/" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a href="/about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item active">
                        <a href="/find" class="nav-link">Find a Bathroom</a>
                    </li>

                </ul>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar