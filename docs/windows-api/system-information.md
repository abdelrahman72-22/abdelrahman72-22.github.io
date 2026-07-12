---
sidebar_position: 3
title: 03. System Information
---

# System Information

Windows provides several APIs that allow applications to retrieve information about the current system, processor, memory, operating system, and hardware.

These APIs are widely used by system utilities, debugging tools, malware, EDR solutions, and reverse engineering tools.

---

## GetSystemInfo()

One of the first WinAPI functions you should learn is **GetSystemInfo()**.

Prototype:

```cpp
VOID GetSystemInfo(
    LPSYSTEM_INFO lpSystemInfo
);
```

This function fills a `SYSTEM_INFO` structure with information about the current system.

Example:

```cpp
SYSTEM_INFO si;

GetSystemInfo(&si);
```

---

## The SYSTEM_INFO Structure

The `SYSTEM_INFO` structure contains important information about the current machine.

| Member | Description |
|---------|-------------|
| `dwPageSize` | Memory page size |
| `dwNumberOfProcessors` | Number of logical processors |
| `wProcessorArchitecture` | Processor architecture |
| `lpMinimumApplicationAddress` | Lowest user-mode virtual address |
| `lpMaximumApplicationAddress` | Highest user-mode virtual address |
| `dwActiveProcessorMask` | Active processor bitmask |

---

## Processor Architecture

The `wProcessorArchitecture` member identifies the CPU architecture.

Common values include:

| Constant | Architecture |
|----------|--------------|
| `PROCESSOR_ARCHITECTURE_AMD64` | x64 |
| `PROCESSOR_ARCHITECTURE_INTEL` | x86 |
| `PROCESSOR_ARCHITECTURE_ARM` | ARM |
| `PROCESSOR_ARCHITECTURE_ARM64` | ARM64 |

Example:

```cpp
switch (si.wProcessorArchitecture)
{
case PROCESSOR_ARCHITECTURE_AMD64:
    printf("x64\n");
    break;

case PROCESSOR_ARCHITECTURE_INTEL:
    printf("x86\n");
    break;
}
```

---

## Memory Page Size

Windows manages virtual memory using fixed-size pages.

On most modern systems:

```text
4096 Bytes = 4 KB
```

The page size can be retrieved using:

```cpp
si.dwPageSize
```

---

## Logical Processors

Windows reports the number of **logical processors**, not physical CPU cores.

Example:

```cpp
printf("%u", si.dwNumberOfProcessors);
```

If Hyper-Threading (SMT) is enabled, the number of logical processors may be greater than the number of physical cores.

---

## Virtual Address Space

Windows defines the valid user-mode virtual address range.

Minimum address:

```cpp
si.lpMinimumApplicationAddress
```

Maximum address:

```cpp
si.lpMaximumApplicationAddress
```

Applications can allocate memory only within this range.

---

## Active Processor Mask

The processor mask is a bitmask representing the logical processors available to the application.

Example:

```cpp
printf("%zX", si.dwActiveProcessorMask);
```

Each bit corresponds to one logical processor.

---

## GetNativeSystemInfo()

On WOW64 systems, `GetSystemInfo()` may return information about the emulated architecture.

To retrieve information about the native processor architecture, use:

```cpp
GetNativeSystemInfo(&si);
```

This function is useful when detecting the real hardware architecture.

---

## Performance Information

Windows also provides APIs for retrieving system performance information.

One commonly used function is:

```cpp
GetPerformanceInfo()
```

It provides information such as:

- Process Count
- Thread Count
- Handle Count
- Commit Memory
- Physical Memory Usage

These APIs are commonly used by Task Manager, Process Explorer, and monitoring tools.

---

## Common Use Cases

System information APIs are frequently used in:

- System Utilities
- Performance Monitoring
- Debuggers
- Reverse Engineering
- Malware Analysis
- EDR Solutions
- Incident Response

---

## Summary

After completing this chapter, you should understand:

- How `GetSystemInfo()` works
- The purpose of the `SYSTEM_INFO` structure
- Processor architecture values
- Memory page size
- Virtual address limits
- Logical processors
- Processor masks
- The difference between `GetSystemInfo()` and `GetNativeSystemInfo()`