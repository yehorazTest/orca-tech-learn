# Troubleshooting Guide

## Common Issues and Solutions

### Development Issues

#### Port Already in Use

**Problem:** 
```bash
Error: Port 8080 is already in use
```

**Solutions:**
1. **Find and kill the process:**
   ```bash
   # On macOS/Linux
   lsof -ti:8080 | xargs kill -9
   
   # On Windows
   netstat -ano | findstr :8080
   taskkill /PID <PID_NUMBER> /F
   ```

2. **Use a different port:**
   ```bash
   npm run dev -- --port 3000
   ```

3. **Change default port in `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     server: {
       port: 3000,
       host: true,
     },
   });
   ```

#### Module Resolution Errors

**Problem:**
```bash
Error: Cannot resolve module '@/components/Header'
Module not found: Can't resolve 'src/components/Header'
```

**Solutions:**
1. **Check file exists and path is correct**
2. **Verify `vite.config.ts` alias configuration:**
   ```typescript
   resolve: {
     alias: {
       '@': path.resolve(__dirname, './src'),
     },
   }
   ```
3. **Restart development server:**
   ```bash
   npm run dev
   ```

#### TypeScript Errors

**Problem:**
```bash
Type 'string' is not assignable to type 'LearningPath'
Property 'id' does not exist on type 'never'
```

**Solutions:**
1. **Check type definitions in `src/types/`**
2. **Ensure proper typing:**
   ```typescript
   // Good
   const learningPath: LearningPath = {
     id: 'python',
     title: 'Python Development',
     // ... other required properties
   };
   
   // Bad
   const learningPath = 'python'; // Wrong type
   ```
3. **Run type checking:**
   ```bash
   npx tsc --noEmit
   ```

#### NPM/Node Issues

**Problem:**
```bash
npm ERR! peer dep missing
npm ERR! code ERESOLVE
```

**Solutions:**
1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Use specific Node version:**
   ```bash
   # Install nvm first, then:
   nvm install 18
   nvm use 18
   npm install
   ```

### Build Issues

#### Build Fails with Memory Error

**Problem:**
```bash
JavaScript heap out of memory
```

**Solutions:**
1. **Increase Node memory:**
   ```bash
   export NODE_OPTIONS="--max-old-space-size=4096"
   npm run build
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
     }
   }
   ```

#### Large Bundle Size

**Problem:** Build output is too large (>1MB)

**Solutions:**
1. **Enable code splitting in `vite.config.ts`:**
   ```typescript
   build: {
     rollupOptions: {
       output: {
         manualChunks: {
           vendor: ['react', 'react-dom'],
           router: ['react-router-dom'],
           ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
         },
       },
     },
   }
   ```

2. **Lazy load components:**
   ```typescript
   const LazyComponent = lazy(() => import('./components/HeavyComponent'));
   ```

3. **Optimize images and assets**

### Deployment Issues

#### GitHub Pages 404 Errors

**Problem:** Pages show 404 when navigating directly to routes

**Solutions:**
1. **Add 404.html fallback:**
   ```html
   <!-- public/404.html -->
   <!DOCTYPE html>
   <html>
   <head>
     <script>
       sessionStorage.redirect = location.href;
     </script>
     <meta http-equiv="refresh" content="0;URL='/your-repo-name/'">
   </head>
   <body></body>
   </html>
   ```

2. **Handle redirect in main app:**
   ```typescript
   // In App.tsx
   useEffect(() => {
     const redirect = sessionStorage.redirect;
     delete sessionStorage.redirect;
     if (redirect && redirect !== location.href) {
       history.replaceState(null, null, redirect);
     }
   }, []);
   ```

3. **Use Hash Router for GitHub Pages:**
   ```typescript
   import { HashRouter as Router } from 'react-router-dom';
   ```

#### Assets Not Loading

**Problem:** CSS, images, or JS files return 404

**Solutions:**
1. **Check base path in `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Must match GitHub repo name
   });
   ```

2. **Verify asset paths are relative:**
   ```typescript
   // Good
   <img src="./images/logo.png" />
   
   // Bad
   <img src="/images/logo.png" />
   ```

3. **Check public folder structure**

#### GitHub Actions Deployment Fails

**Problem:**
```bash
Error: Process completed with exit code 1
```

**Solutions:**
1. **Check GitHub Actions logs**
2. **Verify Node version in workflow:**
   ```yaml
   - name: Setup Node.js
     uses: actions/setup-node@v4
     with:
       node-version: '18' # Match your local version
   ```

3. **Test build locally:**
   ```bash
   npm run build
   ```

### Runtime Issues

#### Blank White Screen

**Problem:** App loads but shows nothing

**Solutions:**
1. **Check browser console for errors**
2. **Verify main component renders:**
   ```typescript
   // In main.tsx
   import { StrictMode } from 'react';
   import { createRoot } from 'react-dom/client';
   import App from './App';
   
   const root = createRoot(document.getElementById('root')!);
   root.render(
     <StrictMode>
       <App />
     </StrictMode>
   );
   ```

3. **Check for JavaScript errors blocking render**

#### Routing Not Working

**Problem:** Navigation doesn't change content

**Solutions:**
1. **Verify Router setup:**
   ```typescript
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   
   <Router>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
     </Routes>
   </Router>
   ```

2. **Use Link components:**
   ```typescript
   import { Link } from 'react-router-dom';
   
   <Link to="/about">About</Link> // Good
   <a href="/about">About</a>     // Bad - causes page reload
   ```

#### Context Provider Errors

**Problem:**
```bash
Error: useUserProgress must be used within UserProgressProvider
```

**Solutions:**
1. **Wrap app with providers:**
   ```typescript
   <UserProgressProvider>
     <SearchProvider>
       <App />
     </SearchProvider>
   </UserProgressProvider>
   ```

2. **Check provider is imported correctly**

### Performance Issues

#### Slow Loading

**Problem:** App takes too long to load

**Solutions:**
1. **Implement lazy loading:**
   ```typescript
   const LazyPage = lazy(() => import('./pages/LearningPathPage'));
   
   <Suspense fallback={<div>Loading...</div>}>
     <LazyPage />
   </Suspense>
   ```

2. **Optimize images:**
   - Use WebP format
   - Implement responsive images
   - Add proper alt attributes

3. **Enable compression in server/hosting**

#### Memory Leaks

**Problem:** App gets slower over time

**Solutions:**
1. **Clean up event listeners:**
   ```typescript
   useEffect(() => {
     const handleScroll = () => { /* handler */ };
     window.addEventListener('scroll', handleScroll);
     
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
   ```

2. **Cancel async operations:**
   ```typescript
   useEffect(() => {
     const controller = new AbortController();
     
     fetch('/api/data', { signal: controller.signal })
       .then(/* handle response */);
     
     return () => controller.abort();
   }, []);
   ```

### Browser Compatibility

#### CSS Not Working in Safari

**Problem:** Styles look different in Safari

**Solutions:**
1. **Use CSS prefixes:**
   ```css
   .element {
     -webkit-transform: translateX(100%);
     transform: translateX(100%);
   }
   ```

2. **Check Tailwind compatibility**
3. **Test in multiple browsers during development**

#### JavaScript Errors in Older Browsers

**Problem:** Site doesn't work in older browsers

**Solutions:**
1. **Add polyfills to `vite.config.ts`:**
   ```typescript
   build: {
     target: 'es2015', // Support older browsers
   }
   ```

2. **Use core-js for polyfills:**
   ```bash
   npm install core-js
   ```

## Debugging Tools

### Browser DevTools

1. **Console Tab:** Check for JavaScript errors
2. **Network Tab:** Monitor failed requests
3. **Elements Tab:** Inspect HTML/CSS
4. **Application Tab:** Check local storage, service workers
5. **Performance Tab:** Profile rendering performance

### React DevTools

Install React DevTools browser extension:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

### Vite DevTools

Enable verbose logging:
```bash
DEBUG=vite:* npm run dev
```

### TypeScript Compiler

Check types without building:
```bash
npx tsc --noEmit --incremental false
```

## Getting Help

### Before Asking for Help

1. **Check console for errors**
2. **Try the solutions in this guide**
3. **Search existing issues on GitHub**
4. **Create a minimal reproduction case**

### Resources

- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **GitHub Pages Docs:** https://docs.github.com/en/pages

### Community Support

- **Stack Overflow:** Tag questions with `reactjs`, `vite`, `typescript`
- **Discord Communities:** React, Vite official Discord servers
- **GitHub Discussions:** Check the repository's discussion section

### Reporting Bugs

When reporting issues, include:
1. **Error message (full stack trace)**
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Environment details** (OS, Node version, browser)
5. **Minimal code example**

## Emergency Recovery

### Complete Reset

If everything is broken:

```bash
# 1. Backup your work
git stash

# 2. Reset to last working commit
git reset --hard HEAD~1

# 3. Clean install
rm -rf node_modules package-lock.json
npm install

# 4. Restart development
npm run dev
```

### Rollback Deployment

If deployment is broken:

```bash
# 1. Revert to previous commit
git revert HEAD

# 2. Push the revert
git push origin main

# 3. Wait for auto-deployment
```

Remember: Most issues have simple solutions. Take a systematic approach, check one thing at a time, and don't hesitate to start fresh if needed! 🔧
