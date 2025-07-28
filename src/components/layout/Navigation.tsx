
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/learning-paths', label: 'Learning Paths' },
    { path: '/courses', label: 'Courses' },
    { path: '/projects', label: 'Projects' },
    { path: '/roadmap', label: 'Roadmap' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/support', label: 'Support Us' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 flex items-center gap-2"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-56 bg-slate-800 border-slate-700 z-50"
      >
        {navigationItems.map((item) => (
          <DropdownMenuItem key={item.path} asChild className="focus:bg-slate-700">
            <Link
              to={item.path}
              className={`w-full px-3 py-2 text-sm transition-colors ${
                isActive(item.path) 
                  ? 'text-blue-400 bg-slate-700/50' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navigation;
