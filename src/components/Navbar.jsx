import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
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
                        <a href="#" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item dropdown active">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Find a Bathroom</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="#" class="dropdown-item">Feature #1</a></li>
                            <li><a href="#" class="dropdown-item">Feature #2</a></li>
                            <li><a href="#" class="dropdown-item">Feature #3</a></li>
                        </ul>
                    </li>
                </ul>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar