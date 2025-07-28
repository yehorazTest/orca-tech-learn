
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Filter, Search, Calendar, TrendingUp } from 'lucide-react';
import Header from '../components/layout/Header';
import RoadmapCard from '../components/ui/RoadmapCard';
import { roadmapItems, roadmapCategories } from '../data/roadmap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const RoadmapPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredItems = roadmapItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPriority = priorityFilter === 'all' || item.priority === priorityFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    
    return matchesCategory && matchesSearch && matchesPriority && matchesStatus;
  });

  const inDevelopment = roadmapItems.filter(item => item.status === 'In Development').length;
  const highPriority = roadmapItems.filter(item => item.priority === 'High').length;

  return (
    <>
      <Helmet>
        <title>Roadmap - ORCATech Learning Platform</title>
        <meta name="description" content="Discover what's coming next to the ORCATech Learning Platform. Vote on upcoming courses and features, and see our development roadmap." />
        <link rel="canonical" href={`https://learn-and-earn.online${location.pathname}`} />
      </Helmet>

      <div className="min-h-screen bg-slate-950">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development Roadmap
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Discover what's coming next to the ORCATech Learning Platform. Vote on upcoming courses and features, 
              and help us prioritize what matters most to you.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 text-center">
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-blue-400">{roadmapItems.length}</div>
                <div className="text-sm text-slate-400">Planned Items</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-green-400">{inDevelopment}</div>
                <div className="text-sm text-slate-400">In Development</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-[120px]">
                <div className="text-2xl font-bold text-orange-400">{highPriority}</div>
                <div className="text-sm text-slate-400">High Priority</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 border-b border-slate-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search roadmap items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="text-white hover:bg-slate-700">All Categories</SelectItem>
                  {roadmapCategories.map(category => (
                    <SelectItem key={category.id} value={category.id} className="text-white hover:bg-slate-700">
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Priority Filter */}
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[140px] bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="text-white hover:bg-slate-700">All Priorities</SelectItem>
                  <SelectItem value="High" className="text-white hover:bg-slate-700">High</SelectItem>
                  <SelectItem value="Medium" className="text-white hover:bg-slate-700">Medium</SelectItem>
                  <SelectItem value="Low" className="text-white hover:bg-slate-700">Low</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] bg-slate-800/50 border-slate-700 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700 text-white">
                  <SelectItem value="all" className="text-white hover:bg-slate-700">All Status</SelectItem>
                  <SelectItem value="Planned" className="text-white hover:bg-slate-700">Planned</SelectItem>
                  <SelectItem value="In Development" className="text-white hover:bg-slate-700">In Development</SelectItem>
                  <SelectItem value="Review" className="text-white hover:bg-slate-700">Review</SelectItem>
                  <SelectItem value="Testing" className="text-white hover:bg-slate-700">Testing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Roadmap Items */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-400 text-lg">No items found matching your filters.</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <RoadmapCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default RoadmapPage;
