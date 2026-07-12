---
sidebar_position: 2
title: 02. Fundamentals
---

# Fundamentals

Before diving into individual Windows API functions, it is important to understand the fundamental concepts that appear throughout the WinAPI.

These concepts form the foundation for Windows programming, Windows Internals, Reverse Engineering, Malware Development, and Malware Analysis.

---

## WinAPI Data Types

Windows defines its own data types to make applications portable across different system architectures.

Some of the most common data types are:

| WinAPI Type | C/C++ Equivalent |
|--------------|------------------|
| `DWORD` | `unsigned long` |
| `WORD` | `unsigned short` |
| `BYTE` | `unsigned char` |
| `BOOL` | `int` |
| `HANDLE` | Reference to a Windows object |
| `LPVOID` | `void*` |

Understanding these types makes reading Microsoft documentation and Windows header files much easier.

---

## Pointer Naming Convention

Many WinAPI data types begin with the prefix **LP**.

Examples:

| WinAPI Type | Equivalent |
|--------------|------------|
| `LPVOID` | `void*` |
| `LPSTR` | `char*` |
| `LPWSTR` | `wchar_t*` |
| `LPDWORD` | `DWORD*` |

A simple rule:

> If a type starts with **LP**, it usually represents a pointer.

---

## Unicode vs ANSI

Most Windows API functions exist in two versions.

ANSI version:

```cpp
CreateFileA(...)
```

Unicode version:

```cpp
CreateFileW(...)
```

Modern Windows applications should always use the **Unicode** version.

Example:

```cpp
L"Hello"
```

The `L` prefix creates a Unicode string (`wchar_t`).

---

## SAL Annotations

Microsoft uses **Source Annotation Language (SAL)** to describe how function parameters should be used.

Common annotations include:

```cpp
_In_
```

Input parameter.

```cpp
_Out_
```

Output parameter.

```cpp
_Inout_
```

Input and output parameter.

SAL annotations improve readability and help developers use WinAPI functions correctly.

---

## Structures

Many WinAPI functions return information through **Structures**.

Example:

```cpp
SYSTEM_INFO si;

GetSystemInfo(&si);
```

The operating system fills the structure with information such as:

- Processor Architecture
- Page Size
- Number of Processors
- Memory Limits

---

## Handles

Most Windows resources are represented by a **HANDLE**.

Examples include:

- Processes
- Threads
- Files
- Events
- Mutexes
- Semaphores

A handle is **not** the object itself.

Instead, it is an identifier that allows a user-mode application to access a Kernel Object.

---

## Error Handling

Most WinAPI functions indicate success or failure.

If a function fails, retrieve the error code immediately.

```cpp
DWORD error = GetLastError();
```

Always call `GetLastError()` immediately after the failed API because another WinAPI call may overwrite the stored error code.

---

## Microsoft Learn

Microsoft Learn should always be your primary reference when learning WinAPI.

Whenever you study a new function, always check:

- Function Prototype
- Parameters
- Return Value
- Error Handling
- Remarks
- Example Code

Official documentation often explains important behaviors that are easy to miss.

---

## Summary

After completing this chapter, you should understand:

- WinAPI Data Types
- Pointer Naming Conventions
- Unicode vs ANSI APIs
- SAL Annotations
- Structures
- Handles
- Error Handling
- How to use Microsoft Learn effectively
