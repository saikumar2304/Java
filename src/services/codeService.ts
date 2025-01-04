const API_URL = 'http://localhost:3001';

export async function compileAndRun(code: string): Promise<{ output?: string; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/compile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code })
    });
    
    if (!response.ok) {
      throw new Error('Server error');
    }
    
    return await response.json();
  } catch (err) {
    console.error('Compilation error:', err);
    return { error: err instanceof Error ? err.message : 'Failed to connect to compilation service' };
  }
}